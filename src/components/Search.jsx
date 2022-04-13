import { BiPlus, BiSearch } from "react-icons/bi";
import { SearchContainer } from "../styles/components/search";
const Search = ({searchEvent, btnURL, searchPlaceholder  }) => {
	return (
		<SearchContainer>
			<button className='addBtn'>
				<a href={btnURL}>{<BiPlus />}</a>
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
