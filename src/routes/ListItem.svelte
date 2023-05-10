<script lang="ts">
	import Fa from "svelte-fa"

	import { faXmark } from "@fortawesome/free-solid-svg-icons"
	import { faPenToSquare } from "@fortawesome/free-solid-svg-icons"
	import { faThumbTack } from "@fortawesome/free-solid-svg-icons"

	export let title: string
	export let id: string
	export let tag: string
	export let checked = false
	export let pinned = false
</script>

<li class="media-item">
	<label for={id} class="media-item__label">
		{title}
		<span class="media-item__checkbox" />
	</label>

	<input type="checkbox" class="hidden" {id} name={title} bind:checked />

	<button class="button-icon button-icon--delete">
		<Fa icon={faXmark} />
	</button>

	<p class="media-item__tag">{tag}</p>

	<div class="media-item__controls">
		<button class="button-icon">
			<span class="sr-only">Edit</span>
			<Fa icon={faPenToSquare} />
		</button>

		<button class="button-icon">
			<span class="sr-only">Pin</span>
			<Fa icon={faThumbTack} />
		</button>
	</div>
</li>
