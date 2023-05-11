import { writable, derived } from "svelte/store"
import type { Writable } from "svelte/store"
import type { Media } from "./utils"

let items = [ {
    id: "test-item",
    title: "Cyberpunk: Edgerunners",
    tag: "Movie",
    checked: false,
    pinned: false

}]

const createArrayStore = (items: Media[]) => {
	const { set, update, subscribe }: Writable<{items: Media[]}> = writable({
		items
	})

	const addItem = (item: Media) => {		
		update(store => {
			return {
				...store,
				items: [item, ...store.items],
			}
		})
	}



	const removeItem = (id: string) => {
		update(store => {
			let itemsUpdated = store.items.filter(item => item.id !== id)

			return { ...store, items: itemsUpdated }
		})
	} 

	return {
		subscribe,
		addItem,
		removeItem,
	}
}

export const MediaStore = createArrayStore(items)

export const MediaStorePinned = derived(MediaStore, ($MediaStore) => {
    const pinnedItemIndex = $MediaStore.items.findIndex(item => item.pinned)

    if (pinnedItemIndex === -1) return $MediaStore.items

    return [
        $MediaStore.items[pinnedItemIndex],
        ...$MediaStore.items.filter(item => !item.pinned)
    ]
})