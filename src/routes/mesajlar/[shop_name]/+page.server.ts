import { error } from '@sveltejs/kit';
import slugify from '../../../utils/slugify';

export async function load({ params, locals }) {
	const slug = slugify(params.shop_name);
	const { data: seller } = await locals.supabase.from('sellers').select().eq('slug', slug);

	if (seller) {
		return {
			seller: seller[0]
		};
	}

	throw error(404, 'Mağaza bulunamadı.');
}
