<script lang="ts">
	// important, use base component, the regular component has no support for ipx/transformer property
	import { Image } from '@unpic/svelte/base';
	import { transform } from 'unpic/providers/ipx';
</script>

<h1>Welcome to SvelteKit v2</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<!-- TODO: we can't use external urls directly? https://picsum.photos/id/29/3840/2160 -->
<Image
	src="https://picsum.photos/id/29/3840/2160"
	width={800}
	height={600}
	layout="constrained"
	alt="winter mountain landscape"
	transformer={transform}
/>
