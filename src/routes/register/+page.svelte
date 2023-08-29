<script lang="ts">
	export let data;

	let email: string;
	let password: string;

	const handleSignUp = async () => {
		await data.supabase.auth.signUp({
			email,
			password,
			options: {
				emailRedirectTo: `${location.origin}/auth/callback`
			}
		});
	};
</script>

<form on:submit={handleSignUp} class="container max-w-md m-auto p-5 space-y-5">
	<label class="label">
		<span>Email</span>
		<input name="email" bind:value={email} class="input" type="text" placeholder="email@mail.com" />
	</label>
	<label class="label">
		<span>Parola</span>
		<input
			bind:value={password}
			name="password"
			class="input"
			type="password"
			placeholder="******"
		/>
	</label>
	<div class="flex items-center space-x-5">
		<button class="btn variant-filled-primary">Kayıt ol</button>
		<a href="/login" class="text-sm hover:underline">Giriş yapmak için tıklayın.</a>
	</div>
</form>
