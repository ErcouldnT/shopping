import { error } from '@sveltejs/kit';
import kategoriler from '../../settings/navigation';
import slugify from '../../utils/slugify';

export function load({ params }) {
	const categorySlug = params.category.toLowerCase();
	const category = kategoriler.find((el) => slugify(el) === categorySlug);

	if (category) {
		return {
			category
		};
	}

	throw error(404, 'Kategori bulunamadı.');
}
