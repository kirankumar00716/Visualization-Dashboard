import { useState } from "react";
import {
  Box,
  Container,
  FormControl,
  FormLabel,
  Input,
  Button,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";

const LoginPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    setIsOpen(true);
    setTimeout(() => {
      setIsOpen(false);
      window.location.href = "/dashboard";
    }, 2000);
  };

  return (
    <Box
      bg="linear-gradient(to bottom right, #4F3BA9, #9068BE)"
      minH="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Container
        p={20}
        borderWidth={1}
        borderRadius="10"
        borderColor="white"
        textAlign="center"
        position="relative"
        maxW="md"
        bg="rgba(255,255,255,0.13)"
        backdropFilter="blur(10px)"
        border="2px solid rgba(255,255,255,0.1)"
        boxShadow="0 0 40px rgba(8,7,16,0.6)"
        padding={100}
      >
        <h1
          style={{
            color: "white",
            fontSize: "32px",
            fontWeight: "500",
            lineHeight: "42px",
            textAlign: "center",
            fontFamily: "Poppins, sans-serif",
            padding: "20px",
            marginBottom: "20px",
          }}
        >
          Welcome Admin !!!
        </h1>
        <form>
          <FormControl mt={8}>
            <FormLabel color="white" fontSize="16px" fontWeight="500">
              Admin Email:
            </FormLabel>
            <Input
              type="text"
              placeholder="Enter your username"
              value="admin@gmail.com"
              borderColor="white"
              borderRadius={5}
              disabled
              fontFamily="Poppins, sans-serif"
              bg="rgba(255,255,255,0.07)"
              mt={2}
              fontSize="14px"
              fontWeight={300}
              height="50px"
              width="100%"
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel color="white" fontSize="16px" fontWeight="500">
              Password
            </FormLabel>
            <Input
              type="password"
              placeholder="Enter your password"
              value="admin"
              borderColor="white"
              borderRadius={5}
              disabled
              fontFamily="Poppins, sans-serif"
              bg="rgba(255,255,255,0.07)"
              mt={2}
              fontSize="14px"
              fontWeight={300}
              height="50px"
              width="100%"
            />
          </FormControl>
          <Button
            mt={8}
            w="100%"
            bg="white"
            color="#080710"
            py={6}
            fontSize="18px"
            fontWeight="600"
            borderRadius="5px"
            onClick={handleLogin}
            marginTop={"50"}
          >
            Login
          </Button>
          <AlertDialog isOpen={isOpen} leastDestructiveRef={undefined}>
            <AlertDialogOverlay>
              <AlertDialogContent bg="purple.800" color="white">
                <AlertDialogHeader>Welcome Admin !!!</AlertDialogHeader>
                <AlertDialogBody>
                  Redirecting to the dashboard page...
                </AlertDialogBody>
                <AlertDialogFooter>
                  <Button onClick={() => setIsOpen(false)}>Cancel</Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialogOverlay>
          </AlertDialog>
        </form>
      </Container>
    </Box>
  );
};

export default LoginPage;
