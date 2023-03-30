import { Stack, Skeleton } from '@chakra-ui/react';
import { useEffect } from 'react';

export default function ChakraSkeleton() {
    useEffect(() => {
        console.log(window);
    }, []);
    return (
        <Stack style={{margin:"40px"}}>
            <p>hello</p>
            <Skeleton height='20px' />
            <Skeleton height='20px' />
            <Skeleton height='20px' />
            <Skeleton height='20px' />
            <Skeleton height='20px' />
            <Skeleton height='20px' />
            <Skeleton height='20px' />
            <Skeleton height='20px' />
            <Skeleton height='20px' />
            <Skeleton height='20px' />
        </Stack>
    )
}