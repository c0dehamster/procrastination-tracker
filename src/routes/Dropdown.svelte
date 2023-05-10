<script lang="ts">
	export let items: Array<string>
	export let group: string
</script>

<div class="dropdown">
	<button class="button">Select tag</button>

	<ul class="dropdown__list">
		{#each items as item}
			<li class="dropdown__list-item">
				<label for={`dropdown-${item}`} class="dropdown__label"
					>{item}</label>
				<input
					type="radio"
					class="hidden"
					value={item}
					id={`dropdown-${item}`}
					name={item}
					bind:group />
			</li>
		{/each}
	</ul>
</div>
