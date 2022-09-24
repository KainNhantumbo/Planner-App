import { Link } from 'react-router-dom';
import { BiPlus, BiSearch } from 'react-icons/bi';
import { SearchContainer as Container } from '../styles/components/search';

const Search = ({ searchEvent, btnURL, searchPlaceholder, title }) => (
	<Container>
		<button title={title} className='addBtn'>
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
	</Container>
);

export default Search;
