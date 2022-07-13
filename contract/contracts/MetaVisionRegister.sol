//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

error MetaVision__RegistrationClosed();
error MetaVision__AlreadyRegistered();

/**
 * @title Smart Contract for register in MetaVision Network
 * @author mpp1337
 * @notice Only for user registration in our system.
 * Contract's owner can disable registration
 * @dev Only register function is available for call
 */

contract MetaVisionRegister is Ownable {
    struct User {
        string telegramUsername;
        string eMail;
        string metaVerse;
        address userAddress;
        bool isRegistered;
    }

    bool s_isOpened = false;
    mapping(address => User) private _addressToUser;
    User[] private s_users;

    modifier isOpened() {
        if (s_isOpened) {
            _;
        } else {
            revert MetaVision__RegistrationClosed();
        }
    }

    modifier onlyOnce() {
        if (_addressToUser[msg.sender].isRegistered) {
            revert MetaVision__AlreadyRegistered();
        } else {
            _;
        }
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
        _addressToUser[msg.sender] = user;
        s_users.push(user);
        emit UserRegistered(msg.sender);
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
        return _addressToUser[msg.sender];
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
}
