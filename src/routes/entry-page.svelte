<script>
  import quotes from "../data/quotes.js";
  import { navigate } from "svelte-routing";
  import Header from "../components/header.svelte";
  import Footer from "../components/footer.svelte";
  import { monthNames, convertToMonthDay } from "../helpers";
  //in string format month-date
  export let parsedDateString = "";

  const offsetDate = (offsetAmount) => {
    window.scrollTo(0, 0);
    if (offsetAmount === 0) {
      // return back home to today's date
      navigate("/", { replace: true });
      return;
    }
    const identityDate = new Date(); // purely just to get the year
    const dateObject =
      new Date(
        Date.parse(`${parsedDateString}-${identityDate.getFullYear()}`)
      ) || new Date();

    console.log(dateObject);
    const nextDate = new Date(
      dateObject.getFullYear(),
      dateObject.getMonth(),
      dateObject.getDate() + offsetAmount
    );
    parsedDateString = convertToMonthDay(nextDate);
    navigate(`/${parsedDateString}`, { replace: true });
  };

  $: dateParts = parsedDateString.split("-");
  $: [month, day] = dateParts;

  $: if (month.length === 3) {
    console.log(month);
    // update month to long form
    const [longForm] = monthNames.filter((e) => e.substring(0, 3) === month);
    month = longForm;
  }

  $: currentQuote = quotes[`${month} ${day}`];
  $: parsedQuotes = currentQuote && currentQuote.entryContent.trim();
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
  {#if parsedQuotes}
    <Header>{month} {day}</Header>
    <p>
      {@html parsedQuotes}
    </p>
  {:else}
    <Header>Invalid Entry</Header>
    <p>
      Search for an entry via the url using "Month day" format e.g.,
      <a href="http://calendarwisdom.com/jan-1">
        http://calendarwisdom.com/jan-1
      </a>
    </p>
  {/if}
</div>
<Footer {offsetDate} />
