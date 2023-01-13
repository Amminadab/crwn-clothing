import "./category-menu.style.scss";
import CategoryItem from "../category-item/category-item.component";

const CategoryMenu = ({ categories }) => {
  //   console.log(categories);

  return (
    <div className="categories-container">
      {categories.map((category) => {
        return <CategoryItem category={category} key={category.id} />;
      })}
    </div>
  );
};
export default CategoryMenu;
