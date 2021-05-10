import ApiConstants from "../ApiConstants";

export const getUserData = async () => {
    
    let response = await fetch(
       ApiConstants.USER_API
      );
    let json = await response.json();
 
    return json;

}

export const getUserDetailData = async (api, repoapi, gistapi) => {

  let users = await fetch(api);
  let repos = await fetch(repoapi)
  let gist = await fetch(api+ "/gists")
  
  let usersJson = await users.json();
  let reposJson = await repos.json();
  let gistsJson = await gist.json();

  return {usersJson, reposJson, gistsJson};

}

export const searchUserData = async (queryName) => {

  var encodedParameter = encodeURIComponent(queryName)
  var queryApi = ApiConstants.SEARCH_USER_API + encodedParameter

  let response = await fetch(queryApi);
  let json = await response.json();

  return json.items;

}
