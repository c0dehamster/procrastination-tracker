<script lang="ts">
	import Fa from "svelte-fa"
	import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

	export let checked = false
</script>

<div class="tags">
	<label for="" class="tags__label">
		Tags
		<span class="tags__icon">
			<Fa icon={faArrowRight} />
		</span>
	</label>

	<input type="checkbox" class="hidden" bind:checked />
</div>
