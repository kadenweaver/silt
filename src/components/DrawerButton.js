import React from 'react'
import { Button, Icon } from '@chakra-ui/react'

export const DrawerButton = (props) => {
    const { buttonTitle, openTab, active, icon } = props

    return (
        <Button 
            onClick={openTab}
            w='100%'
            h='65px'
            backgroundColor={active ? '#e6eef5' : '#3c4759'}
            color={active ? '#3c4759' : 'white'}
            _hover={active ? 
                {
                    backgroundColor: '#e6eef5',
                    color: '#3c4759'
                } :
                {
                    backgroundColor: '#2f3847',
                    color: 'white'
                }
            }
            mr='auto'
            ml= 'auto'
            mb='none'
            borderBottom={active ? '2px solid #a3b7cc' : undefined}
            borderRadius='0'
            leftIcon={<Icon as={icon}/>}>
                {buttonTitle}
        </Button>
    )
}