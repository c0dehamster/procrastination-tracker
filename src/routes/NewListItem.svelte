<script lang="ts">
	import { tags } from "./Tags"

	import Dropdown from "./Dropdown.svelte"

	let selectedTag = ""
</script>

<form on:submit|preventDefault class="new-item">
	<button class="checkbox-circle">
		<span class="sr-only">Add new</span>
	</button>

	<input
		type="text"
		class="new-item__input"
		placeholder="Enter the title..." />

	<Dropdown items={tags} bind:group={selectedTag} />
</form>
