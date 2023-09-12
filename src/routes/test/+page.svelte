<script>
	import {Button} from "@svelteuidev/core";
	import video from "$lib/videos/video.mp4";
</script>

<div>
	<video src={video} controls={true} style="width: 80%;" />
	<Button>hello</Button>
</div>
