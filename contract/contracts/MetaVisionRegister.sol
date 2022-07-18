//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

error MyVerse__RegistrationClosed();
error MyVerse__AlreadyRegistered();
error MyVerse__NotRegistered();

/**
 * @title Smart Contract for register in MetaVision Network
 * @author mpp1337
 * @notice Only for user registration in our system.
 * Contract's owner can disable registration
 * @dev Only register function is available for call
 */

contract MyVerseRegister is Ownable {
    struct User {
        string telegramUsername;
        string eMail;
        string metaVerse;
        address userAddress;
        bool isRegistered;
    }

    bool s_isOpened = false;
    mapping(address => User) private s_addressToUser;
    User[] private s_users;

    modifier isOpened() {
        if (s_isOpened) {
            _;
        } else {
            revert MyVerse__RegistrationClosed();
        }
    }

    modifier onlyOnce() {
        if (s_addressToUser[msg.sender].isRegistered) {
            revert MyVerse__AlreadyRegistered();
        } else {
            _;
        }
    }

    modifier onlyRegistered() {
        if (!s_addressToUser[msg.sender].isRegistered) {
            revert MyVerse__NotRegistered();
        }
        _;
    }

    event UserRegistered(address indexed _newMember);
    event RegistrationOpened();
    event RegistrationClosed();

    /**
     * @notice This method registers users in our system.
     * Works only if registration has been opened
     * User can register only once
     */
    function register(
        string memory _tgUsername,
        string memory _eMail,
        string memory _metaVerse
    ) external isOpened onlyOnce {
        User memory user = User(
            _tgUsername,
            _eMail,
            _metaVerse,
            msg.sender,
            true
        );
        s_addressToUser[msg.sender] = user;
        s_users.push(user);
        emit UserRegistered(msg.sender);
    }

    function updateUserData(string memory telegram, string memory email)
        external
        onlyRegistered
    {
        User storage user = s_addressToUser[msg.sender];
        if (checkStringLength(telegram) > 1) {
            user.telegramUsername = telegram;
        }
        if (checkStringLength(email) > 1) {
            user.eMail = email;
        }
    }

    /* OWNER FUNCTIONS */

    /**
     * @notice This method opens registration. Available only for owner
     */
    function openRegistration() external onlyOwner {
        s_isOpened = true;
        emit RegistrationOpened();
    }

    /**
     * @notice This method closes registration. Available only for owner
     */
    function closeRegistration() external onlyOwner {
        s_isOpened = false;
        emit RegistrationClosed();
    }

    /* VIEW FUNCTIONS */

    /**
     * @notice This method returns user info.
     * @return Returns User struct if user registered in MV system
     */

    function getUser() external view returns (User memory) {
        return s_addressToUser[msg.sender];
    }

    /**
     * @notice This method returns user info at index in array.
     * @param _index Index of user in array
     * @return Returns User struct if user registered in MV system
     */

    function getUserAt(uint256 _index) external view returns (User memory) {
        return s_users[_index];
    }

    /**
     * @notice This method returns number of users registered in the system.
     * @return Returns number of users
     */

    function getNumberOfUsers() external view returns (uint256) {
        return s_users.length;
    }

    function getRegistrationState() external view returns (bool) {
        return s_isOpened;
    }

    function getAllUsers() external view onlyOwner returns (User[] memory) {
        return s_users;
    }

    /* PRIVATE FUNCTIONS */

    function checkStringLength(string memory s) private pure returns (uint256) {
        return bytes(s).length;
    }
}
