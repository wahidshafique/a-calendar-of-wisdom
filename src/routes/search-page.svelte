<script>
  import quotes from '../data/quotes.js'
  import VirtualList from '@sveltejs/svelte-virtual-list'
  import Fuse from 'fuse.js'

  let searchText = ''
  let searchHitcount = 0
  let timer

  const allQuotes = Object.entries(quotes).map(([date, datum]) => {
    return { key: date, content: datum.entryContent }
  })

  const debounce = (v) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      searchText = v
    }, 750)
  }

  const fusedQuotes = new Fuse(allQuotes, {
    keys: ['key', 'content'],
    includeMatches: true,
    threshold: 0.2,
    ignoreLocation: true,
    minMatchCharLength: 2
  })

  const search = (v) => {
    const results = fusedQuotes.search(v)
    searchHitcount = results.length
    if (searchText.length > 0) {
      return results
    } else {
      searchHitcount = 0
      return allQuotes
    }
  }

  console.log(fusedQuotes.search('chicken'))
</script>

<style>
  .hits {
    color: #f0b641;
  }
  .virtual-container {
    max-width: 40rem;
    height: 60rem;
    margin: 0 auto;
    background-color: white;
    padding: 1px 32px 32px 16px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }

  .form-item input[type='text'] {
    display: block;
    width: 100%;
    height: 34px;
    font-size: 32px;
    line-height: 1.4;
    color: #9e9e9e;
    background-color: transparent;
    background-image: none;
    border: none;
    border-bottom: 2px solid rgba(240, 182, 65, 0.5);
    padding: 6px 12px 6px 0;
  }
  .form-item input[type='text']:focus,
  .form-item input[type='text']:active {
    outline: none;
    box-shadow: none;
    color: black;
  }
  .form-item input[type='text']:focus ~ label:before {
    font-size: 12px;
    bottom: 48px;
    color: black;
  }
  .form-item input[type='text']:focus ~ label:after {
    background-repeat: no-repeat;
    background-size: 1000% 1000%;
    background-image: radial-gradient(
      circle,
      #f0b641 10%,
      rgba(0, 0, 0, 0) 11%
    ) !important;
  }
  .form-item input[type='text']:not(:placeholder-shown) ~ label:before {
    font-size: 12px;
    bottom: 48px;
  }
  .form-item label:before {
    content: attr(data-label);
    display: block;
    position: absolute;
    left: 0;
    bottom: 6px;
    transition: all 0.15s ease-in-out;
    color: #f0b641;
  }
  .form-item label:after {
    content: '';
    position: absolute;
    display: inline-flex;
    text-decoration: none;
    justify-content: center;
    align-items: center;
    text-align: center;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    transition: all 0.4s ease-in-out;
    background-position: 50%;
    background-size: 200% 200%;
    /* color: #f0b641; */
    color: red;
  }
  .form-item {
    position: relative;
    margin: 25px 0px;
  }

  .form-container {
    /* min-width: 40rem; */
    display: flex;
    justify-content: center;
    padding: 16px;
  }
</style>

<div>
  <div class="form-container">
    <div class="form-item">
      <input
        on:keyup={({ target: { value } }) => debounce(value)}
        type="text"
        id="example"
        placeholder="&nbsp;" />
      <label for="example" data-label="Search quotes" />
    </div>

    {#if searchHitcount > 0}
      <p class="hits">{searchHitcount} result(s)</p>
    {/if}
  </div>
  <div class="virtual-container">
    <VirtualList items={search(searchText)} let:item>
      <!-- this will be rendered for each currently visible item -->
      <p>
        <strong>{(item.item && item.item.key) || item.key}</strong>
        {@html (item.item || item).content.replace(/(?:\r\n|\r|\n)/g, '<br>')}
      </p>
    </VirtualList>
  </div>
</div>
