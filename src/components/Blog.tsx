import * as React from 'react';

export default function BlogComponent(
  props: any
): React.ReactComponentElement<any> {
  const data = props.jsonData.data;
  console.log('data prop? : ', data);
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
