export async function getData(url) {
  try {
    const respones = await fetch(url);

    const data = await respones.json();

    return data;
  } catch {
    throw new Error("Произошла ошибка");
  }
}
