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

  const date = new Date();
  const month = monthNames[date.getMonth()];
  const day = date.getDate();
  const parsedQuotes = quotes[`${month} ${day}`].entryContent.trim();
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
<Footer />
