// priority: 0

onEvent('item.registry', event => {
	// Register transitional item used by sequenced assembly
	event.create('incomplete_poke_nav1', 'basic').displayName('Incomplete Poke Nav')
})
