import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props{
    onSelectSortOrder:(sortOrder:string)=> void,
    currentSortOrder:string;
}
const SortSelector = ({onSelectSortOrder, currentSortOrder}:Props) => {
    const sortOrders = [
        { value: "", label: "Relavance" },
        { value: "-added ", label: "Date Added" },
        { value: "name", label: "Name" },
        { value: "-released", label: "Release date" },
        { value: "-metacritic", label: "Popularity" },
        { value: "-rating", label: "Average rating" },
    ];

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                Order by :{!currentSortOrder ? "Relavance" : currentSortOrder }
            </MenuButton>
            <MenuList>
               {sortOrders.map(order =>(
                <MenuItem onClick={()=> onSelectSortOrder(order.label)} key={order.value} value={order.value}>{order.label}</MenuItem>
               ))}
            </MenuList>
        </Menu>
    );
};

export default SortSelector;
