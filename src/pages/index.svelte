<script>
<<<<<<< HEAD
    import { tw } from "twind";
</script>

<div class={tw`p-4 m-4 border border-purple-600 rounded bg-gray-100`}>
    <h2
        class={tw`text-3xl font-medium text-primary cursor-pointer hover:(underline)`}>
        Routify + Twind (Tailwind CSS in JS version) template
    </h2>
    <p class={tw`mt-3`}>
        Visit
        <a
            class={tw`text-blue-600 hover:text-blue-800`}
            href="https://github.com/lamualfa/routify-twind">Official Repository</a>
        for further information.
    </p>
</div>
=======
    import RoutifyIntro from './example/_components/RoutifyIntro.svelte'
    import { metatags } from '@roxi/routify'
    metatags.title = 'My Routify app'
    metatags.description = 'Description coming soon...'
</script>

<RoutifyIntro />
>>>>>>> 6dbdc96a68c338533ad96802c64d64d47fa990b0
