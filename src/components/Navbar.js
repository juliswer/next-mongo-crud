import {Menu, Container, Button} from 'semantic-ui-react';

export const Navbar = () => {
    return (
        <Menu inverted borderless attached>
            <Container>
                <Menu.Item>
                    <img src="/favicon.ico" alt="" />
                </Menu.Item>
                <Menu.Menu position="right">
                    <Menu.Item>
                        <Button primary size="mini" onClick={() => alert('works')}>
                            New Task
                        </Button>
                    </Menu.Item>
                </Menu.Menu>
            </Container>
            
        </Menu>
    )
}