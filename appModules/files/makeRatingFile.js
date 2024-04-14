import fs from "fs";

export async function makeRatingFile(path, array) {
  const ratingFile = await fs.readFileSync(path, "utf8");
  const ratingArray = JSON.parse(ratingFile);

  array.forEach((item) => {
    if (!ratingArray.find((el) => el.id === item.id)) {
      let obj = {
        id: item.id,
        title: item.title,
        image: item.image,
        link: item.link,
        description: item.description,
        rating: 0,
      };
      ratingArray.push(obj);
    }
  });

  await fs.writeFileSync(path, JSON.stringify(ratingArray));
}
