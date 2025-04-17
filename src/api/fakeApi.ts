export const fetchCompanies = async () => {
    const res = await fetch('../data/companies-lookup.json');
    if (!res.ok) {
        throw new Error("Не вдалося завантажити дані компаній");
    }
    return res.json();
};
