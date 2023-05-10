<script lang="ts">
	import ToggleTags from "./ToggleTags.svelte"
	import TagCheckbox from "./TagCheckbox.svelte"

	let tagListExpanded = false
	let tags = ["Movie", "Book", "Article", "Tutorial", "Project"]
	let tagsActive: Array<string> = []
</script>

<header class="header">
	<ToggleTags checked={tagListExpanded} />

	<h1 class="logo">
		<span class="logo__section">Procrasti</span>
		<span class="logo__section">nation</span>
	</h1>

	<fieldset class="tags">
		<legend class="sr-only">Tags</legend>

		<ul class="tags__list">
			{#each tags as name}
				<TagCheckbox {name} bind:group={tagsActive} />
			{/each}
		</ul>
	</fieldset>
</header>
