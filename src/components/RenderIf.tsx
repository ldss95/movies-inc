import React from 'react';
import { memo, ReactElement } from 'react';

interface RenderIfProps {
	condition: boolean;
	children: ReactElement;
}
const RenderIf = ({ condition, children }: RenderIfProps) => {
	return condition ? children : <></>;
};

export default memo(RenderIf);
