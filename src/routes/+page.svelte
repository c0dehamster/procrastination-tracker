<script lang="ts">
	import Header from "./Header.svelte"
	import NewListItem from "./NewListItem.svelte"
	import ListItem from "./ListItem.svelte"

	import { MediaStorePinned } from "./List"

	$: items = $MediaStorePinned
</script>

<Header />

<main class="main">
	<NewListItem />

	<ul class="media-list">
		{#if items.length > 0}
			{#each items as media}
				<ListItem {media} />
			{/each}
		{/if}
	</ul>
</main>
