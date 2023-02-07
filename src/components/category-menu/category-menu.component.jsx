import "./category-menu.style.scss";
import DirectoryItem from "../directory-item/directory-item.component";

const CategoryMenu = ({ categories }) => {
  //   console.log(categories);

  return (
    <div className="categories-container">
      {categories.map((category) => {
        return <DirectoryItem category={category} key={category.id} />;
      })}
    </div>
  );
};
export default CategoryMenu;
