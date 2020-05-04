<script>
  import FooterImg from "../assets/favicon-192.png";
  export let offsetDate;
</script>

<style>
  button {
    border: 1px solid #f0b641;
    background: transparent;
    color: #f0b641;
    font-family: system-ui, sans-serif;
    font-size: 1rem;
    line-height: 1.2;
    white-space: nowrap;
    text-decoration: none;
    padding: 0.25rem 0.5rem;
    margin: 0.25rem;
    cursor: pointer;
    transition: all 0.2s;
  }

  button:hover {
    background-color: #f0b641;
    color: black;
  }
  a {
    color: #f0b641;
  }
  .footer {
    margin-top: 24px;
    line-height: 6px;
    width: 100%;
    color: #f0b641;
    text-align: center;
    font-size: 14px;
  }

  .sub {
    font-size: 12px;
  }
</style>

<div class="footer">
  <button
    class="button1"
    aria-label="Previous Date"
    on:click={() => offsetDate(-1)}>
    ⮜
  </button>
  <button
    class="button1"
    aria-label="Today's Date"
    on:click={() => offsetDate(0)}>
    ✺
  </button>
  <button class="button1" aria-label="Next Date" on:click={() => offsetDate(1)}>
    ⮞
  </button>
  <p>
    <a href="https://en.wikipedia.org/wiki/A_Calendar_of_Wisdom">
      A Calendar Of Wisdom by Leo Tolstoy
    </a>
  </p>
  <p class="sub">Translated by Peter Sekirin © 1997</p>
  <p class="sub">
    Special thanks to
    <a href="https://a-calendar-of-wisdom.blogspot.com/">Hugh Songs</a>
  </p>
  <img
    src={FooterImg}
    height="32px"
    width="32px"
    alt="Stylized footer icon of an unknown creature" />
</div>
