import {useRecoilValue}     from "recoil";
import styled               from "styled-components";
import downstreamServices   from "config/downstreamServices";
import {TransactionTraceId} from "state/TransactionStatus";
import Container            from "../StyleComponents/Container";
import {SVGImage}           from "../Widgets/SVGImage";
import Link                 from "../Widgets/Link";
import {StyledCentered}     from "../StyleComponents/Centered";
import {FlexRow}            from "../StyleComponents/FlexRow";

const StyledPageFooter = styled(Container)`
	position: fixed;
	bottom: 0;
	width: 100%;
	height: 40px;
	box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.21);
	background-image: linear-gradient(92deg, #1b1c1e 2%, #0b0b0c 100%);
	display: flex;
	justify-content: space-between !important;
	align-items: center !important;
	z-index: 1000;
	color: white;
`

const DocsLinks = styled(Link)`
	width: 20px;
	height: 20px;
	mix-blend-mode: hard-light;
	padding: 1px;
	${StyledCentered}
`;

const Box = styled.div`
	display: flex;
	width: 75px;
	align-items: center;
	justify-content: center;
	padding-right: 20px;
`;

const PageFooter = () => {
	const transactionTraceId = useRecoilValue(TransactionTraceId);
	return (<StyledPageFooter>
		<div style={{ marginLeft: `15px` }}>
			{transactionTraceId && <>
                Having issues? Reach out to us on Discord and mention this trace ID: {transactionTraceId}
            </>}
		</div>
		<Box>
			<DocsLinks href={downstreamServices.GITHUB_LINK}>
				<FlexRow>
					<SVGImage
						src={require(`resources/github.svg`)?.default}
						height={"18px"}
						width={"18px"}
						margin={"0px"}
					/>
					<p style={{margin: `10px`}}>
						Github
					</p>
				</FlexRow>
			</DocsLinks>
		</Box>
	</StyledPageFooter>);
}

export default PageFooter;