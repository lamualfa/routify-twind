<script>
    import { tw } from "twind";
</script>

<div class={tw`p-4 m-4 border(& purple-600) rounded bg-purple-50`}>
    <h2
        class={tw`text(3xl primary) font-medium cursor-pointer hover:(underline)`}>
        Routify + Twind (Tailwind CSS in JS version) template
    </h2>
    <p class={tw`mt-3`}>
        Visit
        <a
            class={tw`text(blue-600 hover:blue-800)`}
            href="https://github.com/lamualfa/routify-twind">Official Repository</a>
        for further information.
    </p>
</div>
