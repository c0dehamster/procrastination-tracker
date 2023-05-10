<script lang="ts">
	import Header from "./Header.svelte"
	import NewListItem from "./NewListItem.svelte"
	import ListItem from "./ListItem.svelte"
</script>

<Header />

<main class="main">
	<NewListItem />

	<ul class="media-list">
		<ListItem title="Cyberpunk: Edgerinners" id="testItem" tag="Movie" />
	</ul>
</main>
