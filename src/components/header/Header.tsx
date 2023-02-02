'use client';

import styled from 'styled-components';

function Header({icon = ''}) {
    return (
        <HeaderContainer>
            <HeaderInner>
                Test
            </HeaderInner>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div``;

const HeaderInner = styled.div``;

export default Header;