import { fail, redirect } from '@sveltejs/kit';

export const actions = {
	default: async ({ request, url, locals: { supabase } }) => {
		const formData = await request.formData();
		const email = formData.get('email') as string;
		const password = formData.get('password') as string;

		const { data, error } = await supabase.auth.signInWithPassword({
			email,
			password
		});

		if (error) {
			return fail(500, { message: 'Email veya parola yanlış', success: false, email });
		}

		throw redirect(300, '/');
	}
};
