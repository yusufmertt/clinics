import { SearchInput2 } from "./search2";

const Menu = (props) => {
  return (
    <div>
      <SearchInput2 language={props.language}/>
      {/* <SearchInput /> */}
    </div>
  );
};

export default Menu;
