import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ cookies }) => {
  try {
    const cachedCode = cookies.get('country_code');

    if (cachedCode) {
      return { countryCode: cachedCode };
    }

    const response = await fetch('https://api.country.is/');
    const data = await response.json();

    if (data.country) {
      cookies.set('country_code', data.country, {
        path: '/',
        maxAge: 7 * 24 * 60 * 60,
        httpOnly: false,
        sameSite: 'lax',
      });
      return { countryCode: data.country };
    }

    return { countryCode: null };
  } catch (error) {
    console.error('Error is ', error);
    return { countryCode: null };
  }
};
