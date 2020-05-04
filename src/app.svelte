<script>
  import Header from "./components/header.svelte";
  import Footer from "./components/footer.svelte";
  export let quotes = [];

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  let date = new Date();

  const offsetDate = offsetAmount => {
    if (offsetAmount === 0) {
      date = new Date();
      return;
    }
    date = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate() + offsetAmount
    );
    console.log(date);
  };
  $: month = monthNames[date.getMonth()];
  $: day = date.getDate();
  $: currentQuote = quotes[`${month} ${day}`];
  $: parsedQuotes = currentQuote.entryContent.trim();
</script>

<style>
  .card {
    max-width: 40rem;
    margin: 0 auto;
    background-color: white;
    padding: 1px 32px 32px 16px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }
  p {
    font-size: 16px;
    white-space: pre-line;
  }
</style>

<div class="card">
  <Header {month} {day} />
  <p>
    {@html parsedQuotes}
  </p>
</div>
<Footer {offsetDate} />
