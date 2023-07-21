import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'


const GameCardSkeleton = () => {
  return (
<Card border={10} overflow='hidden' >
    <Skeleton height='200px'/>
    <CardBody>
        <SkeletonText/>
    </CardBody>
</Card>
  )
}

export default GameCardSkeleton