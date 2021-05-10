import ApiConstants from "../ApiConstants";

export const getUserData = async () => {
    
    let response = await fetch(
       ApiConstants.USER_API
      );
    let json = await response.json();
 
    return json;

}

export const getUserDetailData = async (api, repoapi, gistapi) => {
  console.log("gisttt", gistapi)
  let users = await fetch(api);
  let repos = await fetch(repoapi)
  let gist = await fetch(api+ "/gists")
  
  let usersJson = await users.json();
  let reposJson = await repos.json();
  let gistsJson = await gist.json();

  console.log("dataaa", users, repos, gist)

  return {usersJson, reposJson, gistsJson};

}

export const searchUserData = async (queryName) => {
console.log("queryname", queryName)
  var encodedParameter = encodeURIComponent(queryName)
  var queryApi = ApiConstants.SEARCH_USER_API + encodedParameter
  console.log("queryname", queryApi)
  let response = await fetch(queryApi);
  let json = await response.json();
  console.log("query search", json)
  return json.items;

}
