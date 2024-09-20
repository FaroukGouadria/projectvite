import { Box, Flex, Text, Icon, Link, IconButton, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, useDisclosure } from '@chakra-ui/react';
import { FaHome ,FaAlignJustify } from 'react-icons/fa'; 
import { useState, useEffect } from 'react';
import colorsData from '../utils/Colors.json';

function Navbar() {
  const [colors, setColors] = useState({ navBarBgColor: '', siteColor: '' ,blackColor:'' });
    
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    setColors(colorsData);
  }, []);

  return (
    <Box bg={colors.navBarBgColor} width="100%" position="fixed" top={0} left={0} p={4} zIndex={1}>
      <Flex justify="space-between" align="center" width="100%" px={10}>
        <Flex align="center">
          <Icon as={FaHome} boxSize={6} color={colors.siteColor} mr={2} />
          <Text fontSize="2xl" fontWeight="bold" color={colors.siteColor}>
            MyWebsite
          </Text>
        </Flex>

        <Flex display={{ base: 'flex', md: 'none' }} align="center">
          <IconButton
            icon={<FaAlignJustify />}
            aria-label="Open Menu"
            variant="outline"
            color={colors.siteColor}
            onClick={onOpen}
          />
        </Flex>

        <Flex display={{ base: 'none', md: 'flex' }} align="center">
          <Link href="#" color={colors.siteColor} mx={4} fontSize="lg">
            Home
          </Link>
          <Link href="#contact" color={colors.siteColor} mx={4} fontSize="lg">
            Contact Us
          </Link>
          <Link href="#about" color={colors.siteColor} mx={4} fontSize="lg">
            About
          </Link>
        </Flex>
      </Flex>

      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg={colors.navBarBgColor}>
          <DrawerHeader borderBottomWidth="1px" color={colors.siteColor}>Menu</DrawerHeader>
          <DrawerBody>
            <Link href="#" color={colors.siteColor} display="block" py={2} fontSize="lg" onClick={onClose}>
              Home
            </Link>
            <Link href="#contact" color={colors.siteColor} display="block" py={2} fontSize="lg" onClick={onClose}>
              Contact Us
            </Link>
            <Link href="#about" color={colors.siteColor} display="block" py={2} fontSize="lg" onClick={onClose}>
              About
            </Link>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default Navbar;