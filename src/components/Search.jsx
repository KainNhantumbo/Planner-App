import { BiPlus, BiSearch } from "react-icons/bi";
import { SearchContainer } from "../styles/components/search";
import { Link } from "react-router-dom";

const Search = ({searchEvent, btnURL, searchPlaceholder  }) => {
	return (
		<SearchContainer>
			<button className='addBtn'>
				<Link to={btnURL}>{<BiPlus />}</Link>
			</button>
			<section>
				{<BiSearch className='searchIcon' />}
				<input
					type='search'
					name='search'
					placeholder={searchPlaceholder}
					onChange={searchEvent}
				/>
			</section>
		</SearchContainer>
	);
};

export default Search;
