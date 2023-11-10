import {HStack , Image} from '@chakra-ui/react'
import  logo from '../assets/logo.webp'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'
import useGameQueryStore from '../stores/gameQueryStore';


const NavBar = () => {

  const {setSearchText} = useGameQueryStore();
  return (
   <HStack  padding='10px'>
    <Image src={logo} boxSize='60px'/>
    <SearchInput onSearch={(searchText)=> setSearchText(searchText)}/>
    <ColorModeSwitch/>
  
   </HStack>
  )
}

export default NavBar