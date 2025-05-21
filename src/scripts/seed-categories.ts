import { db } from "@/db";
import { categories } from "@/db/schema";

const categoryNames = [
  "Clothing",
  "Music",
  "Gaming",
  "Sports",
  "Entertainment",
  "Education",
  "How-to & Style",
  "Science & Technology",
  "News & Politics",
  "Pets & Animals",
  "Travel & Events",
  "Autos & Vehicles",
  "Comedy",
  "People & Blogs",
  "Film & Animation",
  "Nonprofits & Activism",
];

async function main() {
  console.log("seeding categories");

  try {
    const values = categoryNames.map((name) => ({
      name,
      description: `Videos related to ${name.toLocaleLowerCase()}`,
    }));

    await db.insert(categories).values(values);
    console.log("Categories seeded successfully");
  } catch (error) {
    console.log("Error seeding categories:", error);
    process.exit(1);
  }
}

main();
