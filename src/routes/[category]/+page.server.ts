import { error } from '@sveltejs/kit';
import kategoriler from '../../settings/navigation';
import slugify from '../../utils/slugify';

export function load({ params }) {
	const slug = params.category;
	const category = kategoriler.find((el) => slugify(el) === slug);

	if (category) {
		return {
			category
		};
	}

	throw error(404, 'Kategori bulunamadı.');
}
