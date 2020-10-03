<script>
    const childPromise = import('./child.svelte');
    let ChildModule;
</script>

<svelte:dependency await={childPromise} then={ChildModule} />

<ChildModule.default />