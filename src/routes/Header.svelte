<script lang="ts">
	import ToggleTags from "./ToggleTags.svelte"

	import { tags } from "./Tags"

	let tagListExpanded = false
	let tagsActive: Array<string> = []

	$: console.log(tagsActive)
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
				<!-- Moving the tag item to a separate component
            doesn't help due to a bug -->
				<li class="tags__list-item">
					<label for={`header-${name}`} class="tag__label"
						>{name}</label>
					<input
						type="checkbox"
						class="hidden"
						id={`header-${name}`}
						{name}
						value={name}
						bind:group={tagsActive} />
				</li>
			{/each}
		</ul>
	</fieldset>
</header>
