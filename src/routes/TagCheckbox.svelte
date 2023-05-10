<script lang="ts">
	export let group: Array<string>
	export let name: string
</script>

<li class="tag">
	<label for={name} class="tag__label">{name}</label>
	<input type="checkbox" class="hidden" id={name} {name} bind:group />
</li>
