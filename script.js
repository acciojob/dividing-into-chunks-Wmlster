const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here

	let v=[];

	let i=0;
	let sum=0;
	let v1=[];

	while(i<arr.length)
		{
			if(sum+arr[i]<=n&&arr[i]!=0)
			{
				sum+=arr[i];
				v1.push(arr[i]);
			}
			else
			{ 
				sum=0;
				v.push(v1);
				v1=[];
				
				sum+=arr[i];
                v1.push(arr[i]);
                
			}

			++i;
		}
		
		v.push(v1);

	return v;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
