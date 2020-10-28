<script>
  import { Router, Route } from "svelte-routing";
  import EntryPage from "./routes/entry-page.svelte";
  import { convertToMonthDay, capitalizeFirstLetter } from "./helpers";
  import SearchPage from "./routes/search-page.svelte";
  export let url = "";
</script>

<Router {url}>
  <div>
    <Route path="/:date" let:params>
      <EntryPage parsedDateString={capitalizeFirstLetter(params.date)} />
    </Route>
    <Route path="/">
      <EntryPage parsedDateString={convertToMonthDay(new Date())} />
    </Route>
    <Route path="/search">
      <SearchPage/>
    </Route>
  </div>
</Router>
